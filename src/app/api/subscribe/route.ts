import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema (same as frontend)
const subscriptionSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  whatsapp: z.string().optional(),
  province: z.string().min(1, 'Selecciona una provincia'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = subscriptionSchema.parse(body);
    
    // Log the subscription data (for development)
    console.log('New subscription:', validatedData);
    
    // TODO: Integrate with external services
    // 
    // 1. Zapier/Make Integration:
    //    - Send data to Zapier webhook or Make scenario
    //    - Example: POST to https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/
    //
    // 2. Google Sheets Integration:
    //    - Use Google Sheets API to append row
    //    - Or send to Zapier/Make which can write to Google Sheets
    //
    // 3. Airtable Integration:
    //    - Use Airtable API to create record
    //    - Or send to Zapier/Make which can write to Airtable
    //
    // 4. Mailchimp Integration:
    //    - Add subscriber to Mailchimp list
    //    - Use Mailchimp API or Zapier/Make integration
    //
    // 5. WhatsApp Business API:
    //    - Send welcome message via WhatsApp Business API
    //    - Or use Zapier/Make to trigger WhatsApp message
    
    // Example Zapier webhook call (uncomment and configure):
    /*
    const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        whatsapp: validatedData.whatsapp,
        province: validatedData.province,
        timestamp: new Date().toISOString(),
        source: 'apiagenda-landing'
      }),
    });
    
    if (!zapierResponse.ok) {
      throw new Error('Failed to send data to Zapier');
    }
    */
    
    // Mock successful response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Suscripción procesada exitosamente',
        data: {
          id: `sub_${Date.now()}`, // Mock ID
          ...validatedData,
          subscribedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Datos de suscripción inválidos',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error interno del servidor' 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
